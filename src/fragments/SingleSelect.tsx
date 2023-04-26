interface ISingleSelectProps {
  selected: any;
  options: any;
  setSelected: any;
}

export default function SingleSelect({
  selected,
  options,
  setSelected,
}: ISingleSelectProps) {
  return (
    <div className="flex gap-3 rounded p-1">
      {options?.map((i: any) => (
        <button
          key={i}
          className={`${
            selected?.id === i?.id ? 'bg-gray-700 px-2 py-1' : ''
          } rounded-full transition-all duration-300`}
          onClick={() => setSelected(i)}
        >
          {i?.value}
        </button>
      ))}
    </div>
  );
}
