import { useState } from 'react';
import axios from '../../axios';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [loader, setLoader] = useState(false);

  const dataCollect = (e) => {
    const { name, value } = e.target; // Destructuring event.target to get name and value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();


    if (formData.fullName.trim() === '') {
      return toast.error('Please enter a full name');
    }

    if (formData.email.trim() === '') {
      return toast.error('Please enter an email address');
    }

    if (formData.message.trim() === '') {
      return toast.error('Please enter a message');
    }

    setLoader(true);

    const { data } = await axios.post('/contact', {
      name: formData.fullName,
      email: formData.email,
      message: formData.message,
    });

    if (data.success) {
       toast.success(<p className=' font-oracle'>Succesfully sent</p>)

      setFormData({
        fullName: '',
        email: '',
        message: '',
      });
      return setLoader(false);
    }
  };

  return (
    <section className="py-12 bg-white_ sm:py-16 lg:py-20 xl:py-24">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-36">
          <div className="px-5 md:px-0">
            <div className="">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 font-Georgia mb-10 lg:mb-20 ">
                Contact Us
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:mt-auto font-oracle">
              <div>
                <h3 className=" text-primary-900 font-semibold">
                  Our office hours
                </h3>
                <p className="mt-4 text-base font-oracle text-gray-900">
                  Monday-Friday
                  <br />
                  9:00 am to 6:00 pm
                </p>
              </div>

              <div>
                <h3 className="font-semibold  text-primary-900 font-oracle">
                  India - Head Office
                </h3>
                <p className="mt-4 text-base font-oracle text-gray-900">
                  Chennai Softech House,
                  <br />
                   #14B, Dr Thirumurthy Nagar 1st Street,
                  Nungambakkam, Chennai – 600 034.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary-900 font-oracle">
                  Malaysia
                </h3>
                <p className="mt-4 text-base text-gray-900">
                  #5, Jalan 4/33, Petaling Jaya,
                  <br /> 46050, Selangor, Malaysia
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary-900 font-oracle">
                  China
                </h3>
                <p className="mt-4 text-base font-oracle text-gray-900">
                  Credence Tec Block, YIWU Shenzhen International Integrated
                  Logistics Port A1 – 1 – 3,  China – 518000
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-900 font-oracle">
                  Get in touch
                </h3>
                <p className="mt-4 text-base font-oracle text-gray-900">
                  +91 44 3566 0936 <br />
                  info@credencetec.in
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl font-oracle rounded-2xl">
            <div className="p-6 sm:p-10">
              <form onSubmit={onSubmit} method="POST" className="space-y-6">
                <div>
                  <label
                    for="fullName"
                    className="text-base font-medium text-gray-900"
                  >
                    Your name
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => dataCollect(e)}
                      value={formData.fullName}
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Enter your full name"
                      className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="email"
                    className="text-base font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => dataCollect(e)}
                      value={formData.email}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="message"
                    className="text-base font-medium text-gray-900"
                  >
                    Write your message
                  </label>
                  <div className="mt-2">
                    <textarea
                      onChange={(e) => dataCollect(e)}
                      value={formData.message}
                      name="message"
                      id="message"
                      placeholder="Write us your question here..."
                      rows="4"
                      className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 resize-y rounded-xl focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                    ></textarea>
                  </div>
                </div>

                {loader ? (
                  <button className="inline-flex items-center justify-center px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-primary-900 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
                    Sending...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-primary-900 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                  >
                    Send message
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default ContactForm;
