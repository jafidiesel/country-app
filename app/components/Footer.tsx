export default function Footer() {
  return (
    <div className="text-slate-300 bg-cyan-700 object-bottom p-4">
      <div className="flex flex-row justify-evenly">
        <div>
          <p>This app it&apos;s build with:</p>
          <ul className="ml-4">
            <li>React v18+</li>
            <li>
              <a
                className="underline"
                href="https://tailwindcss.com"
                target="_blank"
                rel="noreferrer"
              >
                tailwindcss
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://remix.run/"
                target="_blank"
                rel="noreferrer"
              >
                Remix
              </a>
            </li>
            <li>graphql + apollo</li>
            <li><a href="https://github.com/trevorblades/countries" target="_blank" rel="noreferrer" className="underline">trevorblades API</a></li>
          </ul>
        </div>
        
        <div>
          <p>About:</p>
            <ul className="ml-4">
                <li>Hi! I&apos;m Jafi</li>
                <li><a href="https://jafibravin.com" target="_blank" rel="noreferrer" className="underline">jafibravin.com</a></li>
                <li><a href="https://github.com/jafidiesel/country-app" target="_blank" rel="noreferrer" className="underline">This code</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
}
