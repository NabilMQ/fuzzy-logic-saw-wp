import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function CustomTable({
  title, 
  headerList, 
  data, 
  UDRes = false,
  setData,
} : {
  title?: string;
  headerList: string[]; 
  data: (string | number)[][]; 
  UDRes?: boolean;
  setData?: Dispatch<SetStateAction<(string | number)[][]>>;
}) {

  const tempData = data;

  const [isEditing, setIsEditing] = useState(false);
  const [doneEditing, setDoneEditing] = useState(false);
  

  useEffect(() => {
    if (doneEditing) {
      setData!([...tempData]);
    }

    return () => {
      setDoneEditing(false)
    };
  }, [doneEditing])
  

  return (
    <div className="flex flex-col space-y-4">
      {
        UDRes
          ? <div className="flex flex-row space-x-2 justify-end mx-3">
              <button onClick={() => {
                setIsEditing(false);
                setData!(
                  [
                    ["", "SSD Portable Samsung T7", 109.99,	1000,	1050,	1000,	72],
                    ["", "SanDisk Extreme PRO Portable SSD",	139.99,	2000,	2000,	1000,	77.5],
                    ["", "SanDisk Extreme Portable SSD",	99.99,	1000,	1050,	500,	52],
                    ["", "Lexar® Professional SL600 Portable SSD",	199.99,	2000,	2000,	2000,	64],
                    ["", "SE880 External Solid State Drive",	79.99,	2000,	2000,	500,	31],
                  ]
                )
              }} className="self-end-safe mx-1 h-fit rounded-full border border-custom-black bg-custom-black p-2 text-custom-white hover:bg-transparent hover:text-custom-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                </svg>
              </button>

              <button onClick={() => {
                tempData.push(["", "Dummy Data", 100, 1000, 1000, 1000, 100]);
                setData!([...tempData]);
              }} className="self-end-safe mx-1 h-fit rounded-full border border-custom-black bg-custom-black p-2 text-custom-white hover:bg-transparent hover:text-custom-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
              </button>

              <button onClick={() => {
                if (isEditing) {
                  setDoneEditing(true);
                }
                setIsEditing(!isEditing)
              }} className="self-end-safe mx-1 h-fit rounded-full border border-custom-black bg-custom-black p-2 text-custom-white hover:bg-transparent hover:text-custom-black">
                {
                  isEditing
                    ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                      </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
                      </svg>
                }
              </button>
            </div>
          : <div className="hidden"></div>

      }
      <div className="mx-3 p-3 rounded-md bg-custom-black">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-neutral-600">
            {
              title != null || title != "" || title == undefined
                ? <thead className="ltr:text-left rtl:text-right">
                    <tr className="*:font-medium *:text-custom-white">
                      <th colSpan={headerList.length} className="px-3 py-2 whitespace-nowrap text-center">
                        {title}
                      </th>
                    </tr>
                  </thead>
                : <div className="hidden"></div>
            }
            <thead className="ltr:text-left rtl:text-right">
              <tr className="*:font-medium *:text-custom-white">
                {
                  headerList.map(headerData => (
                    <th key={headerData} className="px-3 py-2 whitespace-nowrap">{headerData}</th>
                  ))
                }
              </tr>
            </thead>

            <tbody className="divide-y divide-neutral-700 *:even:bg-neutral-600">
              {
                tempData.map((el, indexRow) => (
                  <tr key={indexRow} className="*:first:font-medium *:text-custom-white">
                    {
                      el.map((eachData, index) => (
                        isEditing
                          ? headerList[0] == "Kode" && eachData == ""
                            ? <td key={index} className="px-3 py-2 whitespace-nowrap">
                                {"A" + (indexRow + 1).toString()}
                              </td>
                            : <td key={index} className="px-3 py-2 whitespace-nowrap">
                              {
                                index == 5
                                  ? <select onBlur={(e) => {
                                    tempData[indexRow][index] = e.target.value
                                  }} defaultValue={eachData} className="mt-0.5 w-30 rounded border-gray-300 shadow-sm sm:text-sm">
                                      <option className="text-custom-white bg-custom-black" value={500}>500</option>
                                      <option className="text-custom-white bg-custom-black" value={1000}>1000</option>
                                      <option className="text-custom-white bg-custom-black" value={2000}>2000</option>
                                    </select>
                                  : <input defaultValue={eachData} onBlur={e => {
                                      tempData[indexRow][index] = e.target.value;
                                    }} />
                              }
                              </td>
                          : <td key={index} className="px-3 py-2 whitespace-nowrap">
                              {
                                headerList[0] == "Kode" && eachData == ""
                                  ? "A" + (indexRow + 1).toString()
                                  : eachData
                              }
                            </td>
                      ))
                    }
                    {
                      UDRes && !isEditing
                        ? <td className="box-border p-2">
                            <button onClick={() => {
                              tempData.splice(indexRow, 1);
                              setData!([...tempData]);
                            }} className="p-2 inline-block rounded-full border border-red-600 bg-red-600 text-custom-white hover:bg-custom-white hover:text-red-600">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                              </svg>
                            </button>
                          </td>
                        : <td className="hidden"></td>
                    }
                  </tr>    
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}