function getJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req
      .on("data", (chunk) => {
        body += chunk;
      })
      .on("end", () => {
        try {
          resolve(JSON.parse(body));
        } catch (error) {
          reject(error);
        }
      });
  });
}

module.exports = {
  getJsonBody,
};
