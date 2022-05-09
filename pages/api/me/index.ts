export default function (req, res) {
  const miNombre: string = "Joaquin";
  console.log("mi nombre:", miNombre);

  res.send(miNombre);
}
