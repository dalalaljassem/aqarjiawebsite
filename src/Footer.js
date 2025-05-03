export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold">BrickandKey</h3>
          <p className="mt-1 text-sm text-gray-400">
            Property management made simple.
          </p>
        </div>

        <div className="text-sm text-gray-400 text-center sm:text-right">
          <p>
            Contact us:{" "}
            <a
              href="mailto:hello@BrickandKey.com"
              className="text-blue-400 hover:underline"
            >
              info@BrickandKey.com
            </a>
          </p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} BrickandKey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
