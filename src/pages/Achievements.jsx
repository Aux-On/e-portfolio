export default function Achievements() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 border-b pb-2">Achievements & Awards</h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">AURA Research Grant & Award</h2>
            <p className="text-gray-600 italic">3-time recipient</p>
            <p className="mt-1">Recognized for outstanding undergraduate research through the AURA initiative.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Thomas D. Dunlap Memorial Scholarship</h2>
            <p className="mt-1">Awarded to upperclassmen demonstrating exceptional academic achievement.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">John Tummins Memorial Scholarship Endowment</h2>
            <p className="mt-1">Honored for excellence in academics and leadership on campus.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Debate Octo-finalist & Speaker Award Recipient</h2>
            <p className="mt-1">Advanced to octo-finals and earned speaker accolades at regional debate tournaments.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Summa Cum Laude</h2>
            <p className="text-gray-600 italic">Consistently awarded</p>
            <p className="mt-1">Maintained top academic honors across consecutive semesters.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
