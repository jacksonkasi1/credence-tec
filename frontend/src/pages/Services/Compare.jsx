import Typography from '../../components/ui/Typography';

import { GoCheckCircleFill } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';

const Compare = () => {
  return (
    <div className="bg-white_ py-[100px]">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <div className="mx-auto text-center mb-20">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl font-Georgia tracking-wide">
            Compare OEM and Credence Tec Maintenance
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-black_ font-oracle">
            Precision meets Performance: Elevate Standards than OEM by Credence
            Tec Maintenance
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#F5FAFE] font-oracle">
              <tr>
                <th scope="col" className="border text-start px-8 py-6">
                  <Typography
                    className="text-black_"
                    type="oracle"
                    variant="P_SemiBold_H_T"
                  >
                    Features
                  </Typography>
                </th>
                <th scope="col" className="border text-start px-8 py-6">
                  <Typography
                    className="text-black_"
                    type="oracle"
                    variant="P_SemiBold_H_T"
                  >
                    OEM
                  </Typography>
                </th>
                <th scope="col" className="border text-start px-8 py-6">
                  <Typography
                    className="text-black_"
                    type="oracle"
                    variant="P_SemiBold_H_T"
                  >
                    Credence Tec
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap border">
                  <Typography
                    className="text-black_"
                    type="oracle"
                    variant="P_SemiBold_H4"
                  >
                    Type of data center support
                  </Typography>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border">
                  <ul className="font-oracle font-semibold space-y-2">
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Warranty
                    </li>
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Post-warranty
                    </li>
                    <li>
                      <RxCross2 className="bg-red-500 text-white rounded-full inline mr-2 p-[1px]" />
                      Gap
                    </li>
                    <li>
                      <RxCross2 className="bg-red-500 text-white rounded-full inline mr-2 p-[1px]" />
                      EOL & EOSL
                    </li>
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border">
                  <ul className="font-oracle font-semibold space-y-2">
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Warranty
                    </li>
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Post-warranty
                    </li>
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Gap
                    </li>
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      EOL & EOSL
                    </li>
                  </ul>
                </td>
              </tr>

              <tr className="bg-[#F5FAFE]">
                <td className="px-6 py-4 whitespace-nowrap border">
                  <Typography
                    className="text-black_"
                    type="oracle"
                    variant="P_SemiBold_H4"
                  >
                    Maintenance coverage
                  </Typography>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border">
                  <ul className="font-oracle font-semibold space-y-2">
                    <li>
                      {' '}
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      24/7
                    </li>
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Same business day
                    </li>
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Next business day
                    </li>
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border">
                  <ul className="font-oracle font-semibold space-y-2">
                    <li>
                      {' '}
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      24/7
                    </li>
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Same business day
                    </li>
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Next business day
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 whitespace-nowrap border">
                  <Typography
                    className="text-black_"
                    type="oracle"
                    variant="P_SemiBold_H4"
                  >
                    Engineers
                  </Typography>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border">
                  <ul className="font-oracle font-semibold space-y-2">
                    <li>
                      <RxCross2 className="bg-red-500 text-white rounded-full inline mr-2  p-[1px]" />
                      Callback in 30-minutes or less
                    </li>
                    <li className="flex gap-2 items-center">
                      <RxCross2 className="bg-red-500 text-white rounded-full   p-[1px]" />
                      Dedicated primary & <br />
                      secondary engineers
                    </li>
                    <li>
                      <RxCross2 className="bg-red-500 text-white rounded-full inline mr-2  p-[1px]" />
                      Multivendor support
                    </li>
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border">
                  <ul className="font-oracle font-semibold space-y-2">
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Callback in 30-minutes or less
                    </li>
                    <li className="flex gap-2 items-center">
                      <GoCheckCircleFill className="text-green-600 inline text-base" />
                      Dedicated primary & <br />
                      secondary engineers
                    </li>
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Multivendor support
                    </li>
                  </ul>
                </td>
              </tr>

              <tr className="bg-[#F5FAFE]">
                <td className="px-6 py-4 whitespace-nowrap border">
                  <Typography
                    className="text-black_"
                    type="oracle"
                    variant="P_SemiBold_H4"
                  >
                    Replacement parts
                  </Typography>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border">
                  <ul className="font-oracle font-semibold space-y-2">
                    <li>
                      {' '}
                      <RxCross2 className="bg-red-500 text-white rounded-full inline mr-2  p-[1px]" />
                      OnSite Spares
                    </li>
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Parts warehouse
                    </li>
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Forward stocking locations
                    </li>
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border">
                  <ul className="font-oracle font-semibold space-y-2">
                    <li>
                      {' '}
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      OnSite Spares
                    </li>
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Parts warehouse
                    </li>
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Forward stocking locations
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 whitespace-nowrap border">
                  <Typography
                    className="text-black_"
                    type="oracle"
                    variant="P_SemiBold_H4"
                  >
                    Hardware monitoring
                  </Typography>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border">
                  <ul className="font-oracle font-semibold space-y-2">
                    <li>
                      {' '}
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      ITSM Integration
                    </li>
                    <li>
                      <RxCross2 className="bg-red-500 text-white rounded-full inline mr-2  p-[1px]" />
                      Multivendor
                    </li>
                    <li>
                      <RxCross2 className="bg-red-500 text-white rounded-full inline mr-2  p-[1px]" />
                      Call Home Monitoring
                    </li>
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border">
                  <ul className="font-oracle font-semibold space-y-2">
                    <li>
                      {' '}
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      ITSM Integration
                    </li>
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Multivendor
                    </li>
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Call Home Monitoring
                    </li>
                  </ul>
                </td>
              </tr>

              <tr className="bg-[#F5FAFE]">
                <td className="px-6 py-4 whitespace-nowrap border">
                  <Typography
                    className="text-black_"
                    type="oracle"
                    variant="P_SemiBold_H4"
                  >
                    Agreement flexibility
                  </Typography>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border">
                  <ul className="font-oracle font-semibold space-y-2">
                    <li>
                      {' '}
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Coterminous agreements
                    </li>
                    <li>
                      <RxCross2 className="bg-red-500 text-white rounded-full inline mr-2  p-[1px]" />
                      Adjustable penalty-free terms
                    </li>
                    <li>
                      <RxCross2 className="bg-red-500 text-white rounded-full inline mr-2  p-[1px]" />
                      Easy-out agreements
                    </li>
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border">
                  <ul className="font-oracle font-semibold space-y-2">
                    <li>
                      {' '}
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Coterminous agreements
                    </li>
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Adjustable penalty-free terms
                    </li>
                    <li>
                      <GoCheckCircleFill className="text-green-600 inline mr-2 text-base" />
                      Easy-out agreements
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Compare;
