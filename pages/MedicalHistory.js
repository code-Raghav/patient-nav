import Image from "next/image";

export default function MedicalHistory() {
  return (
    <>
      <main className="md:flex">
        <div className="w-full bg-yellow-400 md:w-10/12">hi</div>
        <div className=" h-full m-5 border-2 border-black md:w-2/12">
          <h1 className="text-center font-serif">User Name</h1>
          <Image
            alt="Profile Picture"
            src="/profile.jpg"
            width={400}
            height={100}
            className="pb-2 align-middle mx-auto"
          />

          <div className="p-2">
            <h1 className="text-center font-serif">
              Contact Number: 9876543210
            </h1>
            <div className="w-full flex justify-between">
              <h1 className="text-center font-serif mx-auto">Age: 27</h1>
              <h1 className="text-center font-serif mx-auto">
                Blood Group: A+ve
              </h1>
            </div>
            <h1 className="text-center font-serif">
              H56 B-block Krishna Enclave Sector 17 Rohini
            </h1>
            <h1 className="text-center font-serif">
              Emergency Contact: 9123456780
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
