import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Login = ({ onClose }) => {
  const [mail, setMail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [codeShow, setCodeShow] = useState(false);

  const inputRefs = useRef([]);

  const handleKodGonder = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://kurkayayazilim.xyz/kod-gonder",
        {
          mail,
        }
      );
      if (response.status === 200) {
        toast.success("Doğrulama kodu gönderildi!");
        setCodeShow(true);
      } else {
        toast.error("Kod gönderilemedi, tekrar deneyin.");
      }
    } catch (error) {
      toast.error("Bir hata oluştu, tekrar deneyin.");
    }
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const kodDogrula = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    try {
      const response = await axios.get(
        "https://kurkayayazilim.xyz/kod-sorgula",
        {
          params: { kod: enteredOtp },
        }
      );
      if (response.data === "Doğrulama başarılı.") {
        toast.success("Doğrulama başarılı!");
        onClose();
      } else {
        toast.error("Doğrulama başarısız. Kod yanlış.");
      }
    } catch (error) {
      toast.error("Bir hata oluştu, tekrar deneyin.");
    }
  };

  return (
    <div className="fixed inset-0 bg-neutral-800 bg-opacity-40">
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-5 w-80 md:w-full md:max-w-[500px] relative rounded-xl bg-white">
          <p
            onClick={onClose}
            className="absolute right-5 text-xl font-semibold top-2 text-gray-400 hover:text-black duration-300 cursor-pointer"
          >
            X
          </p>
          <h1 className="font-semibold text-lg text-center tracking-widest">
            Giriş Yap
          </h1>
          <p className="font-medium text-gray-500 text-center mt-3 text-base">
            {codeShow
              ? "4 Haneli doğrulama kodunu giriniz."
              : "Girmiş olduğun Mail adresine bir doğrulama kodu göndereceğiz."}
          </p>
          {codeShow ? (
            <form onSubmit={kodDogrula}>
              <div className="flex justify-center space-x-2 mt-5">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleOtpChange(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-10 outline-none h-10 md:w-14 md:h-14 focus:ring-2 ring-emerald-200 duration-500 border text-center text-lg rounded-md"
                    required
                  />
                ))}
              </div>
              <button
                type="submit"
                className="py-2 bg-green-500 rounded-xl w-full mt-4 text-white active:scale-105 hover:shadow-2xl duration-500 font-semibold text-md"
              >
                Doğrula
              </button>
            </form>
          ) : (
            <form onSubmit={handleKodGonder}>
              <input
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="w-full focus:ring-2 bg-neutral-50 ring-emerald-100 text-center duration-500 outline-none mt-5 border rounded-full p-2"
                placeholder="E-Mail Adresi"
                required
              />
              <button
                type="submit"
                className="py-2 bg-emerald-400 rounded-xl w-full mt-4 text-white active:scale-105 disabled:scale-100 disabled:opacity-60 hover:shadow-2xl duration-500 font-semibold text-md"
              >
                Giriş Yap
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
