self.onmessage = async (e) => {
  const { request } = e.data;

  self.postMessage({ text: "hello world\n" });

  self.close();
};
