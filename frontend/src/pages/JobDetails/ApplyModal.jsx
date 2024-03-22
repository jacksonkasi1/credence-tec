// import core package
import { useState } from 'react';

// import icons
import { RxCross2 } from 'react-icons/rx';
import { MdUpload } from 'react-icons/md';

// import components
import Typography from '../../components/ui/Typography';
import SuccessModal from './SuccessModal';

// import third party package
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from '../../axios';
import toast, { Toaster } from 'react-hot-toast';
import Button from '../../components/ui/Button';
import { Spinner } from '@material-tailwind/react';

const ApplyModal = ({ isOpen, onClose, post }) => {
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState(null);
  const [loader, setLoader] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [errors, seterrors] = useState(false);

  const openSuccessModal = () => {
    setIsSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setIsSuccessModal(false);
  };

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    cover_letter: '',
  });

  const dataCollect = (e) => {
    const { name, value } = e.target; // Destructuring event.target to get name and value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (formData.first_name.trim() === '') {
      seterrors(true);
      return toast.error('Please fill the form');
    }
    if (formData.last_name.trim() === '') {
      seterrors(true);

      return toast.error('Please fill the form');
    }
    if (formData.email.trim() === '') {
      seterrors(true);

      return toast.error('Please fill the form');
    }
    if (formData.cover_letter.trim() === '') {
      seterrors(true);

      return toast.error('Please fill the form');
    }
    if (phone.length <= 10) {
      seterrors(true);

      return toast.error('please enter a phone number');
    }
    if (!file) {
      seterrors(true);

      return toast.error('please add a resume');
    }

    const maxSize = 4 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error('File is too large upload only 4MB file only');
      // Handle the error, for example, show a message to the user
      return;
    }

    if (!consentChecked) {
      return toast.error('Please Select checkbox');
    }

    seterrors(false);

    setLoader(true);

    const formDataCollect = new FormData();
    formDataCollect.append(
      'name',
      `${formData.first_name} ${formData.last_name}`,
    );
    formDataCollect.append('email', formData.email);
    formDataCollect.append('jobname', post);
    formDataCollect.append('coverLetter', formData.cover_letter);
    formDataCollect.append('phone', phone);
    formDataCollect.append('image', file);

    const { data } = await axios.post('/apply-job', formDataCollect);

    if (data.success) {
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        cover_letter: '',
      });
      setPhone('91');
      setFile(null);
      setLoader(false);

      openSuccessModal();
      // onClose();
      // return toast.success('Job successfully applied');
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 bg-[#0000004D] pb-10 text-center sm:block ">
            <span
              className="hidden sm:inline-block  sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom  bg-white rounded-lg p-5 md:p-10 text-left  shadow-xl transform transition-all w-full md:max-w-[600px] relative ">
              <div className="bg-white">
                <Typography
                  variant="P_Bold_H3"
                  type="Georgia"
                  className="block"
                >
                  Apply for this Position
                </Typography>
                <Typography
                  variant="P_Regular_H5"
                  type="oracle"
                  className="mt-6"
                >
                  Ready to join our team? Lets start your journey with us.
                </Typography>
              </div>

              <form onSubmit={onSubmit} className="font-oracle mt-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                  <div>
                    <p className="mb-[6px]">First name</p>
                    <input
                      onChange={(e) => {
                        const newValue = e.target.value.replace(
                          /[^A-Za-z\s]/gi,
                          '',
                        );
                        setFormData({ ...formData, first_name: newValue });
                      }}
                      value={formData.first_name}
                      name="first_name"
                      type="text"
                      placeholder="First name"
                      className={`block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none ${
                        errors && formData.first_name.trim().length === 0
                          ? 'border-red-500'
                          : 'focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                      } `}
                    />
                  </div>
                  <div>
                    <p className="mb-[6px]">Last name</p>
                    <input
                      onChange={(e) => {
                        const newValue = e.target.value.replace(
                          /[^A-Za-z\s]/gi,
                          '',
                        );
                        setFormData({ ...formData, last_name: newValue });
                      }}
                      value={formData.last_name}
                      name="last_name"
                      type="text"
                      placeholder="Last name"
                      className={`block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none ${
                        errors && formData.last_name.trim().length === 0
                          ? 'border-red-500'
                          : 'focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                      }`}
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-[6px]">Email</p>
                  <input
                    onChange={dataCollect}
                    value={formData.email}
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    className={`block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none ${
                      errors && formData.email.trim().length === 0
                        ? 'border-red-500'
                        : 'focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                    }`}
                  />
                </div>
                <div>
                  <p className="mb-[6px]">Phone number</p>
                  <PhoneInput
                    country={'in'}
                    onChange={setPhone}
                    value={phone}
                  />
                </div>
                <div className=" relative">
                  <p className="mb-[6px]">Cover letter</p>
                  <textarea
                    style={{
                      resize: 'none',
                    }}
                    onChange={dataCollect}
                    value={formData.cover_letter}
                    name="cover_letter"
                    rows="5"
                    maxLength={250}
                    placeholder="Type here......"
                    className={`w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none ${
                      errors && formData.cover_letter.trim().length === 0
                        ? 'border-red-500'
                        : 'focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                    } flex items-center justify-between`}
                  />
                  <p className=" text-[8px] absolute bottom-1 right-2">
                    {formData.cover_letter.length}/250
                  </p>
                </div>
                <div>
                  <p className="mb-[6px]">Upload CV/Resume</p>
                  <input
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    id="fileInput"
                    accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    placeholder="Resume.pdf"
                    className="hidden"
                  />
                  <label
                    htmlFor="fileInput"
                    className={`w-full   px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none ${
                      errors && !file
                        ? 'border-red-500'
                        : 'focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                    } flex items-center justify-between`}
                  >
                    <span className="text-black_">{file?.name}</span>
                    <MdUpload className="text-primary-900 text-3xl" />
                  </label>
                </div>
                <div className="flex gap-3">
                  <input
                    onChange={(e) => setConsentChecked(e.target.checked)}
                    type="checkbox"
                    className=" h-5 w-5 rounded-xl "
                  />
                  <p className="mb-[6px]">
                    I consent to the website storing and managing my data.
                  </p>
                </div>
                {loader ? (
                  <div>
                    <Button className="w-full flex items-center justify-center">
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    </Button>
                  </div>
                ) : (
                  <div>
                    <input
                      type="submit"
                      value="Submit"
                      className="w-full text-center cursor-pointer hover:bg-blue-700 duration-500 bg-primary-900 text-white font-semibold py-3 hover:blue-700 rounded-lg"
                    />
                  </div>
                )}
              </form>

              <div className="absolute z-[99] -top-1 -right-1">
                <button
                  onClick={() => {
                    seterrors(false);
                    onClose();
                  }}
                  type="button"
                  className="h-5 w-5 md:h-8 md:w-8 rounded-full bg-red-800 flex items-center justify-center"
                >
                  <RxCross2 className=" text-xl text-white font-bold" />
                </button>
              </div>
            </div>
          </div>
          <SuccessModal
            onClose={onClose}
            isSuccessOpen={isSuccessModal}
            onSuccessClose={closeSuccessModal}
            post="Business Development Executive"
          />
        </div>
      )}
      <Toaster />
    </>
  );
};

export default ApplyModal;
