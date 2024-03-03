const Modal = ({ modal, setModal, children }) => {
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center 
                 
                `}
    >
      <div className="relative bg-orange-400/70 p-6 rounded-lg max-w-[80%] max-h-[80%] overflow-y-auto">
        <div>
          {children}
          <button
            onClick={closeModal}
            className="absolute top-1 right-11 bg-red-600 text-white text-3xl font-bold rounded-full "
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
