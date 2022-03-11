let promise1 = new Promise((res, rej) => {
  !true ? res("Aprobado") : rej(new Error("Rechazado"));
});

promise1
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
