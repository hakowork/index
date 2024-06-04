import { NextPage } from "next"
import Layout from "../../../components/layout"

const Works: NextPage = () => {
  return (
    <Layout title="project x privacy policy">
      <div className="sm:container sm:mx-auto pt-8 sm:pt-12 px-6 sm:px-0">
        <h1 className="font-bold text-xl">Introduction</h1>
        <p>Welcome to project x! This privacy policy outlines how we handle your information when you use our app for creating, deleting, and updating notes. We are committed to protecting your privacy and ensuring the security of your data.</p>

        <br/>

        <h1 className="font-bold text-xl">Information Collection</h1>
        <p>project x uses a local SQLite database to store your notes. All data is stored locally on your device and is not transmitted to any external servers or third parties. The types of data collected include:</p>
        <ul className="list-disc pl-5">
          <li>Notes you create, edit, and delete</li>
          <li>Timestamps of note creation and modification</li>
        </ul>

        <br/>

        <h1 className="font-bold text-xl">Data Usage</h1>
        <p>Your data is used solely for the functionality of the app, which includes:</p>
        <ul className="list-disc pl-5">
          <li>Creating new notes</li>
          <li>Editing existing notes</li>
          <li>Deleting notes</li>
          <li>Storing your notes locally on your device</li>
        </ul>

        <br/>

        <h1 className="font-bold text-xl">Data Security</h1>
        <p>We take the security of your data seriously. Since all data is stored locally on your device, we recommend the following practices to ensure its safety:</p>
        <ul className="list-disc pl-5">
          <li>Use strong passwords for your device</li>
          <li>Keep your device software up-to-date</li>
          <li>Avoid sharing your device with others</li>
        </ul>

        <br/>

        <h1 className="font-bold text-xl">Data Sharing</h1>
        <p>project x does not share your data with any third parties. Your notes are stored locally on your device and are not accessible to us or any other external entities.</p>

        <br/>

        <h1 className="font-bold text-xl">User Rights</h1>
        You have full control over your data within project x. You can:
        <ul className="list-disc pl-5">
          <li>Create new notes</li>
          <li>Edit existing notes</li>
          <li>Delete notes at any time</li>
        </ul>

        <br/>

        <h1 className="font-bold text-xl">Changes to this Privacy Policy</h1>
        <p>We may update this privacy policy from time to time. Any changes will be reflected in the app&#39;s update notes and on our official website.</p>

        <br/>

        <h1 className="font-bold text-xl">Contact Us</h1>
        <p>If you have any questions or concerns about this privacy policy, please contact us at:</p>
        <ul className="list-disc pl-5">
          <li>Email: hakoworkdev@gmail.com</li>
        </ul>

        <br/>

        <p>By using project x, you agree to this privacy policy. Thank you for trusting us with your note-taking needs.</p>
      </div>
    </Layout>
  )
}

export default Works
