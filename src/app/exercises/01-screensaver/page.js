import Link from 'next/link'

function ScreenSaverExercise() {
  const colors = ['lavender', 'slateblue', 'hotpink', 'white']

  return (
    <main>
      Choose your color:
      <ul>
        {colors.map(c => (
          <li key={c}>
            <Link href={`/exercises/01-screensaver/${c}`}>{c}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default ScreenSaverExercise
