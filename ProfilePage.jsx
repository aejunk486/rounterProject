import { useState } from "react";
//ใช้ useLocation เพื่ออ่านค่าตัวแปรที่ส่งมาจากหน้าต้นทาง
import { useLocation, useNavigate } from "react-router-dom";

export default function ProfilePage() {
    //ตั้งตัวแปร location ให้ใช้งาน useLocation() เพื่ออ่านค่าตัวแปรที่ส่งมาจากหน้าต้นทาง
    const location = useLocation();
    const navigate = useNavigate();
    //ตั้งตัวแปร username_p เพื่อเก็บผลถ้า ตัวแปรที่ถูกส่งมามีค่า ก็จะเก็บไว้ในตัวแปรนี้
    //ถ้าตัวแปรที่ถูกส่งมา ไม่มี หรือเป็นค่าว่าง ให้ขึ้นข้อความว่า ไม่พบชื่อผู้ใช้
    const username_p = location.state?.username || "ไม่พบชื่อผู้ใช้";

    //ส่วนของ Textarea
    const [usernameInput, setUsernameInput] = useState("example_user");
    const [details, setDetails] = useState("");

    //วาดหน้าจอ
    return (
        <>
            <div>
                แสดงชื่อ: {username_p}
                <br />
                <input
                    type="text"
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                />
            </div>
            <div>
                <label>รายละเอียด</label>
                <textarea
                    placeholder="กรุณากรอกรายละเอียดเกี่ยวกับตัวคุณ..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                />
                <button onClick={handleBackToHome} >
          กลับไปหน้าแรก
        </button>
            </div>
        </>
    );
    function handleBackToHome(){
        navigate("/");
    }
}