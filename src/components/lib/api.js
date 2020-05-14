import axios from "axios";

const baseUrl = "https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet";

export async function getMessage() {
    let response = await axios.get(baseUrl);
    let data = response.data.tweets;
    console.log(response);
    return data;
}

export function postMessage(MessageObject, stopLoader) {
    try {
      axios.post(baseUrl, { tweet: MessageObject }).then(() => {
        stopLoader()
      })
    } catch (err) {
      console.log('Error:'+ err);
    }
}