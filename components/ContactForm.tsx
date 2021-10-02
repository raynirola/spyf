import { FC, FormEvent } from 'react';

const ContactForm: FC = () => {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log('Form Submit Hit')
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name"
                       className="w-full bg-white rounded border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email"
                       className="w-full bg-white rounded border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
            </div>
            <button
                className="w-full md:w-max text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button
            </button>
            <p className="text-xs text-gray-500 mt-3">
                Don't worry, we hate spams as much as you do.
            </p>
        </form>
    );
};

export { ContactForm };