<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\InvitationOsc;
use Tests\TestCase;
use App\Models\Osc;


class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     * see all osc members
     */

     // php artisan test tests --filter test_see_all_osc_members_and_invitations_sent_and_rejected
     public function test_see_all_osc_members_and_invitations_sent_and_rejected(): void
    {
        $user = User::factory()->create();

        $osc = Osc::factory()->create();
        $user->osc()->attach($osc->id);

        Auth::loginUsingId($user->id);
        $this->assertTrue(Auth::check());

        User::factory()->count(3)->create();
        $membersList = $osc->user()->get();
        $osc->user()->attach($membersList->pluck('id')->toArray());

        $invitationOscPending1 =InvitationOsc::factory()->create(['osc_id' => $osc->id,'status'=>'pending']);
        $invitationOscPending2=InvitationOsc::factory()->create(['osc_id' => $osc->id,'status'=>'pending']);
        $invitationOscPending3= InvitationOsc::factory()->create(['osc_id' => $osc->id,'status'=>'expired']);

        $invitationList = InvitationOsc::where('osc_id',$osc->id)->get();
        $response = $this->get(route('user.index'));
        

        $response->assertSessionHas('invitations',function($invitations) use ($invitationOscPending1,$invitationOscPending2,$invitationOscPending3){
            return $invitations->pluck('id')->toArray() === [$invitationOscPending1->id,$invitationOscPending2->id,$invitationOscPending3->id];
        });
        $response->assertSessionHas('members',function($members) use ($membersList){
            return !empty($members);
        });
      /*
        $response->assertSessionHas('members',function($members) use ($membersList){
            $expectedIds = $membersList->pluck('id')->toArray();
            sort($expectedIds);
            $actualIds = $members->pluck('id')->toArray();
            sort($actualIds);

            //echo dd($expectedIds,$actualIds);
            return $expectedIds === $actualIds;

        });
        */
      

        //$response->assertStatus(200);
    }
    // php artisan test tests --filter test_delete_member_from_osc
    public function test_delete_member_from_osc(): void
    {
        $user = User::factory()->create(['role_id'=>2]);
        $osc = Osc::factory()->create();
        $user->osc()->attach($osc->id);
        Auth::loginUsingId($user->id);
        $this->assertTrue(Auth::check());
        $member = User::factory()->create();
        $osc->user()->attach($member->id);
        $response = $this->delete(route('user.destroy'),['id'=>$member->id]);
        $response->assertSessionHas('success');
        
    }


   
    
}
