export default function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-default text-center text-lg py-6">
        <p className="font-bold">&copy; {getYear} Enrico Sobrinho Gregório. Todos os direitos reservados.</p>
    </footer>
  );
}
