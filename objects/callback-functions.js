/**
 * Callback is like a return way of encapsulating data and return values
 */
//Writing a library to process mpesa transaction
// Requirements - Order number,Amount,Phone number
function processMpesaPayment({ orderNumber, amount, phone }, callback) {
  try {
    if (!orderNumber) {
      throw Error("Order number required");
    }
    if (!amount) {
      throw Error("Amount required");
    }
    if (!phone) {
      throw Error("Phone number required");
    }
    if (isNaN(amount)) {
      throw Error("Amount must be a number");
    }
    const transaction = {
      phone,
      orderNumber,
      amount,
      message: "Payment successful",
    };
    callback(null, transaction);
    if (typeof callback !== "function") {
      throw Error("Callback not a function");
    }
  } catch (error) {
    callback(error, null);
  }
}

function customerPay({ orderNumber, amount, phone }) {
  processMpesaPayment({ orderNumber, amount, phone }, function (error, data) {
    if (error) console.log(error.message);
    else console.log({ data });
  });
}

customerPay({ orderNumber: "1234", amount: "56", phone: "01112233" });
