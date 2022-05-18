import { NextPage } from "next";

const music: NextPage = () => {
  return (
    <div className="max-w-7xl mt-10 mx-auto px-2 sm:px-6 lg:px-8">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-4">
          <div className="px-4 sm:px-0 ">
            <h2 className="text-2xl font-bold leading-6 text-gray-900">
              Music Add
            </h2>
            <p className="mt-1 text-md text-gray-600">음악을 추가합시다</p>
          </div>
        </div>
        <div className=" mt-5 md:mt-0 md:col-span-4">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6  ">
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      제목
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="sm:w-3/5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="artist"
                      className="block text-sm font-medium text-gray-700"
                    >
                      아티스트
                    </label>
                    <input
                      type="text"
                      name="artist"
                      id="artist"
                      autoComplete="artist"
                      className="sm:w-3/5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      이미지 주소
                    </label>
                    <input
                      type="text"
                      name="imgurl"
                      id="imgurl"
                      autoComplete="imgurl"
                      className="sm:w-3/5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="album"
                      className="block text-sm font-medium text-gray-700"
                    >
                      앨범
                    </label>
                    <input
                      type="text"
                      name="album"
                      id="album"
                      autoComplete="album"
                      className="sm:w-3/5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="musicurl"
                      className="block text-sm font-medium text-gray-700"
                    >
                      음악 유튜브 주소
                    </label>
                    <input
                      type="text"
                      name="musicurl"
                      id="musicurl"
                      autoComplete="musicurl"
                      className="sm:w-3/5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 ">
                    <label
                      htmlFor="mood"
                      className="block text-sm font-medium text-gray-700"
                    >
                      무드
                    </label>
                    <select
                      id="mood"
                      name="mood"
                      autoComplete="mood"
                      className="sm:w-2/5 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>따스한</option>
                      <option>힙한</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>추천 코디 추가인데 설계 고민 좀 </div>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-neutral-600 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
                >
                  업로드
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default music;
