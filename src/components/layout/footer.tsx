export function Footer() {
  return (
    <footer className="py-4 text-center text-xs text-gray-500" data-testid="footer">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} Fametonic. All rights reserved.</p>
      </div>
    </footer>
  )
}
