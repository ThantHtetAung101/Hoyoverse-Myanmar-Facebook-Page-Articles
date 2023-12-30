import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto my-8 p-8 bg-white rounded shadow">

                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

                <p className="text-gray-700 mb-6">Last updated: {Date()}</p>

                <p className="mb-6">Thank you for visiting Your Website Name at <a href="https://hoyoverse-myanmar-facebook-page-articles.vercel.app/" className="text-blue-500" target="_blank" rel="noopener noreferrer">https://hoyoverse-myanmar-facebook-page-articles.vercel.app/</a>. This Privacy Policy outlines the types of personal information that is received and collected by Your Website Name and how it is used.</p>

                <p className="mb-6">By using Your Website Name, you agree to the collection and use of information in accordance with this policy.</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                        <p className="text-gray-700 mb-2">While using our website, you may be asked to provide certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email address, or other personal details.</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">Log Data</h3>
                        <p className="text-gray-700 mb-2">Like many site operators, we collect information that your browser sends whenever you visit Your Website Name. This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Cookies</h3>
                        <p className="text-gray-700 mb-2">Your Website Name may use cookies to improve your experience. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our website.</p>
                    </div>

                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                    <p className="text-gray-700 mb-2">Your Website Name may use the collected information for various purposes, including but not limited to:</p>
                    <ul className="list-disc ml-6 mb-4">
                        <li>Personalizing your experience on our website.</li>
                        <li>Improving our website based on your feedback.</li>
                        <li>Sending periodic emails regarding our services.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
                    <p className="text-gray-700 mb-2">Your Website Name may use third-party services to analyze and improve the user experience. These third parties have their own privacy policies addressing how they use such information.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Security</h2>
                    <p className="text-gray-700 mb-2">The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
                    <p className="text-gray-700 mb-2">This Privacy Policy is effective as of {Date()} and will remain in effect except concerning any changes in its provisions in the future, which will be in effect immediately after being posted on this page.</p>
                    <p className="text-gray-700 mb-2">We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. Your continued use of the service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-gray-700 mb-2">If you have any questions about this Privacy Policy, please contact us at <a className='text-purple-500 hover:text-blue-500' href="mailto:galactuscosmic101@gmail.com">my gmail</a></p>
                </section>

            </div>
        </div>
    )
}

export default PrivacyPolicy