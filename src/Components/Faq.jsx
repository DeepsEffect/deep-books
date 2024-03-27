const Faq = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 mt-8">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="divide-y dark:divide-gray-300">
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
            What is Deep Books about?
            </h3>
            <p className="md:pl-0 md:col-span-7">
            Deep Books is an online platform dedicated to connecting readers with a wide range of literary works, spanning various genres and topics. Our goal is to provide a platform for book enthusiasts to discover new reads, share recommendations, and engage in discussions about literature.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
            How can I purchase books on Deep Books?
            </h3>
            <p className="md:pl-0 md:col-span-7">
            To purchase books on Deep Books, simply browse our collection and click on the book you're interested in. You will be directed to a page where you can find more information about the book and a link to purchase it from our partner retailers.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
            Do I need to create an account to use Deep Books?
            </h3>
            <p className="md:pl-0 md:col-span-7">
            While browsing and discovering books on Deep Books does not require an account, creating an account allows you to access additional features such as saving your favorite books, creating reading lists, and participating in our community discussions.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
            How can I contribute book reviews to Deep Books?
            </h3>
            <p className="md:pl-0 md:col-span-7">
            We welcome book reviews from our users! To contribute a review, simply navigate to the book's page and scroll down to the reviews section. You will find an option to submit your review along with a rating. Your review will help other readers make informed decisions about their next read.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
            Are there any fees associated with using Deep Books?
            </h3>
            <p className="md:pl-0 md:col-span-7">
            Deep Books is completely free to use. There are no subscription fees or charges for browsing our collection, accessing book reviews, or participating in our community. We believe in making literature accessible to everyone.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
            How can I contact Deep Books for support or inquiries?
            </h3>
            <p className="md:pl-0 md:col-span-7">
            If you have any questions, feedback, or need support, you can reach out to us through our contact page. We strive to provide excellent customer service and will respond to your inquiries as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
