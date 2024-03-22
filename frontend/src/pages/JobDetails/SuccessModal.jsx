// import icon
import success from '../../assets/svg/success.svg';

const SuccessModal = ({ isSuccessOpen, onSuccessClose, onClose }) => {
  return (
    <>
      {isSuccessOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex bg-[#0000004D] items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-xl p-10  shadow-xl transform transition-all sm:my-8 sm:align-middle  sm:w-full md:max-w-[350px] relative text-center ">
              <div className="flex justify-center mb-6">
                <img src={success} alt="" />
              </div>
              <h1 className="text-2xl !font-Georgia">Success!</h1>
              <p className="font-oracle mt-6">
                Your application has been submitted successfully .
              </p>
              <button
                onClick={() => {
                  onSuccessClose();
                  onClose();
                }}
                type="button"
                className="w-full mt-10 font-oracle py-3 rounded-xl bg-primary-900 hover:bg-blue-700 text-white"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessModal;
