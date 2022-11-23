import React from 'react';
import { useState } from 'react';
import { STRINGS } from '../../../strings';

export default function CreateDAOForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [logo, setlogo] = useState('');

  // TO-DO: This is where your createDao function will go from the aragonOSx SDK
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log({ name, description, website, logo });
    event.preventDefault();
  }

  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:col-span-2 md:mt-0">

          <form onSubmit={handleSubmit}>
            <div className="shadow sm:overflow-hidden sm:rounded-md bg-gray-50">
              <div className="space-y-6 px-4 py-5 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="DAO-name" className="block text-sm font-medium text-gray-700">
                        {STRINGS.DAOname}
                      </label>
                      <input
                        type="text"
                        name="DAO-name"
                        id="DAO-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={STRINGS.placeholderName}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="DAO-website" className="block text-sm font-medium text-gray-700">
                      {STRINGS.DAOwebsite}
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                        {STRINGS.http}
                      </span>
                      <input
                        type="text"
                        name="DAO-website"
                        id="DAO-website"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder={STRINGS.placeholderWebsite}
                        onChange={(e) => setWebsite(e.target.value)}
                        value={website}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    {STRINGS.describeYourDAO}
                  </label>
                  <p className="mt-2 text-sm text-gray-500">
                    {STRINGS.DAOdescription}
                  </p>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder={STRINGS.placeholderDescription}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">{STRINGS.DAOlogo}</label>

                  <div className="mt-1 flex items-center">
                    <span className="inline-block h-12 w-12 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#001f5c" className="h-full w-full text-gray-300">
                        <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                      </svg>
                    </span>

                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>{STRINGS.uploadFile}</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">{STRINGS.dragndrop}</p>
                    </div>
                    <p className="text-xs text-gray-500">{STRINGS.fileMetrics}</p>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-yellow-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {STRINGS.save}
                </button>
              </div>

            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
