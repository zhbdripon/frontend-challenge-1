interface Props {
  confirmationText: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialogue = ({ confirmationText, onConfirm, onCancel }: Props) => {
  return (
    <div
      className="p-4 bg-white rounded-md shadow-md border-1 border-solid"
    >
      <p className="text-gray-700 mb-4 text-sm font-bold">{confirmationText}</p>
      <div className="flex justify-end gap-2">
        <button
          className="px-2 text-xs rounded bg-gray-200 hover:bg-gray-300"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="px-2 text-xs rounded bg-red-500 text-white hover:bg-red-600"
          onClick={onConfirm}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default ConfirmDialogue;
