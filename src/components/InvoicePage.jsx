import React, { useRef } from "react";
import { Button } from "react-bootstrap";

function InvoicePage() {
    const printRef = useRef();

    const handlePrint = () => {
        const printContent = printRef.current.innerHTML;
        const originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;
        window.location.reload();
    };

    return (
        <div>
            <div ref={printRef}>
                <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
                    ต้นฉบับใบกำกับภาษี / ใบเสร็จรับเงิน
                </h1>
                <p><strong>บริษัท บิ๊กซี ซูเปอร์เซ็นเตอร์ จำกัด (มหาชน) (สำนักงานใหญ่)</strong></p>
                <p>เลขที่: MC10100124080006</p>
                <p>วันที่: 01/08/2024</p>
                <p>ที่อยู่: เลขที่ 88/9 ซอย สมานฉันท์-บาร์โบส แขวง พระโขนง เขต คลองเตย</p>
                <p>จังหวัด: กรุงเทพมหานคร 10110</p>
                <p>เลขประจำตัวผู้เสียภาษี: 0107536000633</p>
                
                <p><strong>ชื่อลูกค้า:</strong> บริษัท ฮอว์ลีย์ แอนด์ ฮาเซล เคมิคอล (ประเทศไทย) จำกัด (สำนักงานใหญ่)</p>
                <p>ที่อยู่: เลขที่ 982/22 อาคารเกตเวย์เอกมัย ชั้น 5 ห้อง 5101 ถนนสุขุมวิท แขวงพระโขนง เขตคลองเตย กทม 10110</p>
                <p>เลขประจำตัวผู้เสียภาษี: 0105562175419</p>

                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid black", padding: "8px" }}>จำนวน</th>
                            <th style={{ border: "1px solid black", padding: "8px" }}>รายการ</th>
                            <th style={{ border: "1px solid black", padding: "8px" }}>ราคารวม (บาท)</th>
                            <th style={{ border: "1px solid black", padding: "8px" }}>VAT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: "1px solid black", padding: "8px" }}>1.00</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>บัตรเดิน-วิ่ง วันที่ 17 ส.ค. 2567 : VIP ทุกระยะ</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>1,000.00</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>Y</td>
                        </tr>
                    </tbody>
                </table>

                <p><strong>รวมเงิน:</strong> 1,000.00 บาท</p>
                <p>ส่วนลดเงินสด: 0.00 บาท</p>
                <p>มูลค่าสินค้าที่เสียภาษีมูลค่าเพิ่ม: 934.58 บาท</p>
                <p>ภาษีมูลค่าเพิ่ม: 65.42 บาท</p>
                <p><strong>รวมเงินสุทธิ:</strong> 1,000.00 บาท</p>

                <p><strong>หมายเหตุ:</strong> โปรดเก็บไว้เป็นหลักฐาน บิ๊กซี ขอสงวนสิทธิ์ในการรับเปลี่ยน/คืนสินค้า หากไม่มีใบเสร็จรับเงินมาแสดง</p>
            </div>
            <Button variant="primary" onClick={handlePrint}>
                Print
            </Button>
        </div>
    );
}

export default InvoicePage;
