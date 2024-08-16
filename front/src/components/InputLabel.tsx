interface InputLabelParams {
  label: string;
  type: string;
  name: string;
}

export default function InputLabel(params: InputLabelParams) {
  return (
    <div className="mb-4">
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {params.label}:
      </label>
      <input
        type={params.type}
        id={params.name}
        name={params.name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      />
    </div>
  );
}
