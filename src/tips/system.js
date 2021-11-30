export default function system(sys_name) {
  const func = {
    cyclic: () => {},
    fixed: () => {},
    additive: () => {},
  };
  return func[sys_name]();
}
