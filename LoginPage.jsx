import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function LoginPage(){
    // ประกาศตัวแปร 
    const navigate = useNavigate();
    // ประกาศตัวแปรเก็บ state username, password 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //ประกาศตัวแปรเก็บ state เมื่อกรอก password ถูกต้อง หรือเมื่อกรอก password ผิด
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    // หน้าจอ 
    return(
        <>
        <div>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
        <input
            type="password"
            placeholder="Enter username"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSubmit} className="submitButton">
          ตกลง
        </button>
        {error !== "" && <p className="errorText">{error}</p>}
        {msg !== "" && <p className="msgText">{msg}</p>}
        </>
    );
    function handleSubmit(){
        if (username == "" || password == "") {
            setError("กรุณากรอกข้อมูลให้ครบทุกช่อง");
            return;
          }
      
        else if (username == "admin" && password == "1234") {
            setError("");
            //ให้ไปหน้า profile และส่งค่า username ไปด้วย
            //profile จะต้องตรงกับใน App.jsx
            navigate("/profile", { state: { username } });
            return;
          }
          else {
            setMsg("ใส่ username หรือ password ไม่ถูกต้อง");
          } 
    }
}