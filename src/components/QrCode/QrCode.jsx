import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';
import './QrCode.scss';


const QrCode = ({size}) =>{
    const [qrValue, setQrValue] = useState();
    const [handleInput, setHandleInput] = useState();
    
    const handleClick = () => setQrValue(handleInput);
   
    return (
    <div className="qrBody">
        <QRCodeSVG size={size}  value={qrValue}/>
        <input type="text" value={handleInput} onChange={(e) => setHandleInput(e.target.value)}/>
        {/* <button onClick={setQrValue(handleInput)}></button> */}
        <button onClick={handleClick}>Generate QrCode</button>
    </div>
    )
}

export default QrCode;