import React from 'react';
import BootstrapLayout from '../Layouts/BootstrapLayout'; // ดึงเอาหน้า Layout ด้านบนกับล่างมาครอบ

export default function BootstrapContent() {
    return (
        <BootstrapLayout>
            {/* ข้อความและเนื้อหาที่จะโผล่ตรงกลางหน้าจอระหว่าง Navbar กับ Footer */}
            <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold text-primary">ยินดีต้อนรับสู่ระบบของเรา!</h1>
                    <p className="col-md-8 fs-4 text-secondary">
                        นี่คือหน้าเพจหลักที่สร้างด้วย Laravel 12 และตกแต่งหน้าบ้านด้วย React ร่วมกับ Bootstrap เรียบร้อยแล้วครับ
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        เริ่มต้นใช้งาน
                    </button>
                </div>
            </div>
        </BootstrapLayout>
    );
}