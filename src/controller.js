import Twilio from "twilio";

const { TWILLO_SID, AUTH_TWILLO_KEY } = process.env;

Twilio(TWILLO_SID, AUTH_TWILLO_KEY);
const { MessagingResponse } = Twilio.twiml;
class Controller {
  index(req, res, next) {
    const twiml = new MessagingResponse();
    try {
        /// testing response message 
      twiml.message(`Ola Ricardino`);
      res.set("Content-Type", "text/xml");
      return res.status(200).send(twiml.toString());
    } catch (error) {
      return next(error);
    }
  }
}

export default new Controller();
