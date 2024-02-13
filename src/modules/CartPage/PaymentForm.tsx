import { useEffect } from 'react';
import { useSelector } from 'react-redux';
const PaymentForm = () => {
  useEffect(() => {
    const form = (document.forms as HTMLCollectionOf<HTMLFormElement>)[
      'Newebpay'
    ];
    if (form) {
      form.submit();
    }
  }, []);
  return (
    <form
      name="Newebpay"
      method="post"
      action="https://ccore.newebpay.com/MPG/mpg_gateway"
      >
      {/* <!-- 設定 hidden 可以隱藏不用給使用者看的資訊 --> */}
      {/* <!-- 藍新金流商店代號 --> */}
      <input
        type="hidden"
        id="MerchantID"
        name="MerchantID"
        // value={paymentData.MerchantID}
      />
      {/* <!-- 交易資料透過 Key 及 IV 進行 AES 加密 --> */}
      <input
        type="hidden"
        id="TradeInfo"
        name="TradeInfo"
        // value={paymentData.TradeInfo}
      />
      {/* <!-- 經過上述 AES 加密過的字串，透過商店 Key 及 IV 進行 SHA256 加密 --> */}
      <input
        type="hidden"
        id="TradeSha"
        name="TradeSha"
        // value={paymentData.TradeSha}
      />
      {/* <!-- 串接程式版本 --> */}
      <input type="hidden" id="Version" name="Version" value="2.0" />
      {/* <!-- 直接執行送出 --> */}
      <button type="submit"></button>
    </form>
  );
};

export default PaymentForm;
