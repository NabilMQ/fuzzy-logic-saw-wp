"use client";

import NavBar from "./section/navbar";
import Footer from "./section/footer";
import Accordion from "./element/accordion";
import CustomTable from "./element/custom_table";
import { criteriaData, criteriaHeaderData, criteriaTitle } from "./data/criteria";
import { ratingData, ratingHeaderData, ratingTitle } from "./data/rating";
import { priceData, priceHeaderData, priceTitle } from "./data/price";
import { storageData, storageHeaderData, storageTitle } from "./data/storage";
import { weightData, weightHeaderData, weightTitle } from "./data/weight";
import { writeSpeedData, writeSpeedHeaderData, writeSpeedTitle } from "./data/write_speed";
import { readSpeedData, readSpeedHeaderData, readSpeedTitle } from "./data/read_speed";
import { useEffect, useEffectEvent, useState } from "react";
import { firstComputationHeaderData, secondComputationHeaderDataSAW, secondComputationHeaderDataWP, secondComputationTitleSAW, secondComputationTitleWP, ssdSpecificationHeaderData, thirdComputationHeaderData, thirdComputationTitle } from "./data/specification";
import { convertPrice, convertReadSpeed, convertStorage, convertWeight, convertWriteSpeed } from "./function/rate_specification";
import { computeSAWResult, getallValueForEachCriteriaSAW, normalizeSAW } from "./function/compute_saw";
import { getArrayOfRowByColumn, rankFromArrayOfValue } from "./function/helper";
import { computeWPResult, SVector } from "./function/compute_wp";
import Image from "next/image";

export default function Home() {

  const [isSAW, setIsSAW] = useState(true);

  const [ssdSpecificationData, setSSDSpecificationData] = useState(
    [
      ["", "SSD Portable Samsung T7", 109.99,	1000,	1050,	1000,	72],
      ["", "SanDisk Extreme PRO Portable SSD",	139.99,	2000,	2000,	1000,	77.5],
      ["", "SanDisk Extreme Portable SSD",	99.99,	1000,	1050,	500,	52],
      ["", "Lexar® Professional SL600 Portable SSD",	199.99,	2000,	2000,	2000,	64],
      ["", "SE880 External Solid State Drive",	79.99,	2000,	2000,	500,	31],
    ]
  );
  const [firstComputationData, setFirstComputationData] = useState<(string | number)[][]>([]);
  const [secondComputationData, setSecondComputationData] = useState<(string | number)[][]>([]);
  const [thirdComputationData, setThirdComputationData] = useState<(string | number)[][]>([]);


  const handleComputationDataSAW = useEffectEvent(() => {
    const tempFirstComputationData : (string | number)[][] = [];
    for (let i = 0; i < ssdSpecificationData.length; i++) {
      tempFirstComputationData.push([
        "", 
        ssdSpecificationData[i][1], 
        convertPrice({price: parseInt(ssdSpecificationData[i][2].toString())})!,
        convertWriteSpeed({writeSpeed: parseInt(ssdSpecificationData[i][3].toString())})!,
        convertReadSpeed({readSpeed: parseInt(ssdSpecificationData[i][4].toString())})!,
        convertStorage({storage: parseInt(ssdSpecificationData[i][5].toString())})!,
        convertWeight({weight: parseInt(ssdSpecificationData[i][6].toString())})!,
      ])
    }
    setFirstComputationData([...tempFirstComputationData]);

    const tempSecondComputationData : (string | number)[][] = [];

    for (let i = 0; i < tempFirstComputationData.length; i++) {
      tempSecondComputationData.push([
        "", 
        tempFirstComputationData[i][1], 
        normalizeSAW({
          currentValue: parseInt(tempFirstComputationData[i][2].toString()), 
          arrayOfValue: getArrayOfRowByColumn({value: tempFirstComputationData, indexCol: 2}) as number[],
          isCost: true,
        }),
        normalizeSAW({
          currentValue: parseInt(tempFirstComputationData[i][3].toString()), 
          arrayOfValue: getArrayOfRowByColumn({value: tempFirstComputationData, indexCol: 3}) as number[],
          isCost: false,
        }),
        normalizeSAW({
          currentValue: parseInt(tempFirstComputationData[i][4].toString()), 
          arrayOfValue: getArrayOfRowByColumn({value: tempFirstComputationData, indexCol: 4}) as number[],
          isCost: false,
        }),
        normalizeSAW({
          currentValue: parseInt(tempFirstComputationData[i][5].toString()), 
          arrayOfValue: getArrayOfRowByColumn({value: tempFirstComputationData, indexCol: 5}) as number[],
          isCost: false,
        }),
        normalizeSAW({
          currentValue: parseInt(tempFirstComputationData[i][6].toString()), 
          arrayOfValue: getArrayOfRowByColumn({value: tempFirstComputationData, indexCol: 6}) as number[],
          isCost: true,
        }),
      ]);
    }

    setSecondComputationData(tempSecondComputationData);

    const tempThirdComputationData : (string | number)[][] = [];

    for (let i = 0; i < tempSecondComputationData.length; i++) {
      tempThirdComputationData.push([
        "", 
        tempSecondComputationData[i][1],
        computeSAWResult({value: getallValueForEachCriteriaSAW({value: tempSecondComputationData, indexRow: i})}),
        "",
      ]);
    }

    const tempRank : number[] = rankFromArrayOfValue({arrayValue: getArrayOfRowByColumn({value: tempThirdComputationData, indexCol: 2}) as number[]});

    for (let i = 0; i < tempSecondComputationData.length; i++) {
      tempThirdComputationData[i][3] = tempRank[i];
    }

    setThirdComputationData(tempThirdComputationData);
  });
  
  const handleComputationDataWP = useEffectEvent(() => {
    const tempFirstComputationData : (string | number)[][] = [];
    for (let i = 0; i < ssdSpecificationData.length; i++) {
      tempFirstComputationData.push([
        "", 
        ssdSpecificationData[i][1], 
        convertPrice({price: parseInt(ssdSpecificationData[i][2].toString())})!,
        convertWriteSpeed({writeSpeed: parseInt(ssdSpecificationData[i][3].toString())})!,
        convertReadSpeed({readSpeed: parseInt(ssdSpecificationData[i][4].toString())})!,
        convertStorage({storage: parseInt(ssdSpecificationData[i][5].toString())})!,
        convertWeight({weight: parseInt(ssdSpecificationData[i][6].toString())})!,
      ])
    }
    setFirstComputationData([...tempFirstComputationData]);

    const tempSecondComputationData : (string | number)[][] = [];

    for (let i = 0; i < tempFirstComputationData.length; i++) {
      tempSecondComputationData.push([
        "", 
        tempFirstComputationData[i][1], 
        parseFloat(SVector({value: tempFirstComputationData[i]})),
      ]);
    }

    setSecondComputationData(tempSecondComputationData);

    const tempThirdComputationData : (string | number)[][] = [];

    for (let i = 0; i < tempSecondComputationData.length; i++) {
      tempThirdComputationData.push([
        "", 
        tempSecondComputationData[i][1],
        computeWPResult({currentValue: parseFloat(tempSecondComputationData[i][2].toString()), value: getArrayOfRowByColumn({value: tempSecondComputationData, indexCol: 2}) as number[]}),
        "",
      ]);
    }

    const tempRank : number[] = rankFromArrayOfValue({arrayValue: getArrayOfRowByColumn({value: tempThirdComputationData, indexCol: 2}) as number[]});

    for (let i = 0; i < tempSecondComputationData.length; i++) {
      tempThirdComputationData[i][3] = tempRank[i];
    }

    setThirdComputationData(tempThirdComputationData);
  });

  useEffect(() => {
    if (isSAW) {
      handleComputationDataSAW();
    }
    else {
      handleComputationDataWP();
    }
    
  }, [ssdSpecificationData, isSAW])

  return (
    <main className="gap-4 flex flex-col h-full">
      <NavBar isSAW={isSAW} setIsSAW={setIsSAW} />
      <p className="mx-3 indent-8 text-justify">
        {
          isSAW
            ? "Simple Additive Weighting atau bisa disingkat sebagai SAW merupakan sebuah teknik yang paling sederhana. Menggunakan beberapa operasi dasar, teknik ini merupakan salah satu teknik yang mudah untuk diterapkan. Kali ini, akan dilakukan pemilihan SSD terbaik berdasarkan kriteria dan pembobotan yang telah ditetapkan."
            : "Berbeda dengan SAW, Weighted Product atau WP menggunakan perpangkatan dengan bobot kriteria yang ada. Hasil perpangkatan pada setiap kriteria kemudian dikalikan dengan kriteria-kriteria yang lainnya."
        }
      </p>
      <Accordion title="Kriteria dan Pembobotan">
        <div className="flex flex-col space-y-4">
          <p className="mx-3 indent-8 text-justify">
            Langkah awal adalah dengan menentukan kriteria apa saya yang akan digunakan serta menentukan pembobotannya. Tidak lupa juga untuk membuat tabel untuk mengkonversi data dari spesifikasi SSD yang telah didapat. 
          </p>
          <CustomTable title={criteriaTitle} headerList={criteriaHeaderData} data={criteriaData} />
          <CustomTable title={ratingTitle} headerList={ratingHeaderData} data={ratingData} />
          <CustomTable title={priceTitle} headerList={priceHeaderData} data={priceData} />
          <CustomTable title={storageTitle} headerList={storageHeaderData} data={storageData} />
          <CustomTable title={writeSpeedTitle} headerList={writeSpeedHeaderData} data={writeSpeedData} />
          <CustomTable title={readSpeedTitle} headerList={readSpeedHeaderData} data={readSpeedData} />
          <CustomTable title={weightTitle} headerList={weightHeaderData} data={weightData} />
        </div>
      </Accordion>
      <Accordion title="Spesifikasi SSD">
        <div className="flex flex-col space-y-4">
          <p className="mx-3 indent-8 text-justify">
            Setelah menentukan kriteria dan pembobotannya. Data mengenai spesifikasi dari SSD yang akan dipilih kemudian dikumpulkan terlebih dahulu. 
          </p>
          <CustomTable headerList={ssdSpecificationHeaderData} data={ssdSpecificationData} UDRes={true} setData={setSSDSpecificationData} />
        </div>
      </Accordion>
      <Accordion title="Proses Perhitungan">
        <div className="flex-col space-y-4">
          <p className="mx-3 indent-8 text-justify">
            Data yang telah dikumpulkan kemudian dikonversi terlebih dahulu untuk setiap kriteria yang telah ditentukan.
          </p>
          <CustomTable headerList={firstComputationHeaderData} data={firstComputationData} />
          <p className="mx-3 indent-8 text-justify">
            Setelah dikonversi, data kemudian { isSAW ? "dinormalisasikan" : "dikomputasi untk mendapatkan vektor S" } menurut jenis kriterianya (apakah benefit atau cost) dengan rumus berikut:
          </p>
          <div className="w-full flex flex-row justify-center">
            <Image
              aria-hidden
              src={isSAW ? "/formula/saw_formula.png" : "/formula/wp_formula.png"}
              alt="Globe icon"
              width={120}
              height={120}
            />
          </div>
          <CustomTable title={isSAW ? secondComputationTitleSAW : secondComputationTitleWP} headerList={isSAW ? secondComputationHeaderDataSAW : secondComputationHeaderDataWP} data={secondComputationData} />
          <p className="mx-3 indent-8 text-justify">
            {
              isSAW
                ? "Data yang sudah dinormalisasi kemudian dikalikan dengan bobot yang sudah ditentukan sebelumnya dan dijumlahkan untuk setiap kriterianya. Barulah bisa dilakukan perangkingan."
                : "Setelah didapatkan nilai vektor S untuk setiap SSD, data kemudian dinormalisasi dan kemudian dilakukan perangkingan."
            }
          </p>
          <div className="w-full flex flex-row justify-center">
            <Image
              aria-hidden
              src={isSAW ? "/formula/saw_formula_result.png" : "/formula/wp_formula_result.png"}
              alt="Globe icon"
              width={120}
              height={120}
            />
          </div>
          <CustomTable title={thirdComputationTitle} headerList={thirdComputationHeaderData} data={thirdComputationData} />
        </div>
      </Accordion>
      <div className="grow"></div>
      <Footer />
    </main>
  );
}
