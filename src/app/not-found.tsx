import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="nia-hero">
      <div className="nia-shell pb-24">
        <p className="nia-eyebrow-light mb-4">404</p>
        <h1 className="text-5xl md:text-7xl">This room doesn't exist.</h1>
        <Link href="/" className="nia-btn mt-10">Back to home</Link>
      </div>
    </section>
  );
}
