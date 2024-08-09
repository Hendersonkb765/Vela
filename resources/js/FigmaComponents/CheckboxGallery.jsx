import { useState, useEffect } from 'react';

const categories = [
  { id: 1, name: 'Assistência social', image: 'storage/images/back-view-romantic-couple-outdoors.jpg' },
  { id: 2, name: 'Saúde', image: 'storage/images/back-view-romantic-couple-outdoors.jpg' },
  { id: 3, name: 'Defesa de direitos', image: 'storage/images/back-view-romantic-couple-outdoors.jpg' },
  { id: 4, name: 'Meio ambiente', image: 'storage/images/back-view-romantic-couple-outdoors.jpg' },
  { id: 5, name: 'Habitação', image: 'storage/images/back-view-romantic-couple-outdoors.jpg' },
  { id: 6, name: 'Educação e pesquisa', image: 'storage/images/smiley-teacher-classroom.jpg' },
  { id: 7, name: 'Cultura', image: 'storage/images/young-kids-performing-play-theatre-stage-celebrate-world-theatre-day.jpg' },
];

export default function CheckboxGallery({ onSelectionChange }) {
    const [selected, setSelected] = useState([]);

    const handleSelect = (id) => {
      const newSelected = selected.includes(id)
        ? selected.filter(item => item !== id)
        : [...selected, id];
      setSelected(newSelected);
    };

    // UseEffect sem dependências que causem loops infinitos OBS.:DEU 3003 ERROS POR ISSO ('-')
    useEffect(() => {
      const selectedNames = categories
        .filter(category => selected.includes(category.id))
        .map(category => category.name);
      onSelectionChange(selectedNames);
    }, [selected]); // Removi `onSelectionChange` do array de dependências

    return (
      <div>
        <p>{selected.length} Selecionados</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(category => (
            <label key={category.id} className="relative cursor-pointer">
              <input
                type="checkbox"
                className="absolute opacity-0"
                checked={selected.includes(category.id)}
                onChange={() => handleSelect(category.id)}
              />
              <div className={`h-48 bg-cover bg-center rounded-lg shadow-lg p-4 flex items-end justify-center text-white text-center font-semibold ${selected.includes(category.id) ? 'ring-4 ring-primary' : ''}`}
                style={{ backgroundImage: `url(${category.image})` }}>
                <span className="absolute top-2 right-2 w-5 h-5 rounded-full border-2 border-white bg-white bg-opacity-70 flex items-center justify-center">
                  {selected.includes(category.id) && <div className="w-3 h-3 bg-primary rounded-full"></div>}
                </span>
                <span className="z-10">{category.name}</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    );
}
