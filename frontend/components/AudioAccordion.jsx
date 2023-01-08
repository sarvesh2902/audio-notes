import React from "react";
import { Accordion, Button, Modal } from "flowbite-react";
import { useState } from "react";

const AudioAccordion = ({
  formData,
  handlePlay,
  handleDelete,
  handleEdit,
  shared,
}) => {
  // function to set edit index since direct indexing doesnt work in the modal, gives the last index of the array so setting it here.
  const editText = (index) => {
    setEditIndex(index);
    setEditData(formData[index]);
    setModalState(true);
  };
  // close button function of the model
  const closeModal = () => {
    setModalState(false);
  };

  // sets modal input data
  const handleChange = (event) => {
    setEditData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };
  const [modalState, setModalState] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const [editData, setEditData] = useState([]);
  const accordions = formData.map((item, index) => {
    return (
      <Accordion.Panel key={index}>
        <Accordion.Title className="bg-white">
          <span className="font-bold text-lg">{item.name}</span>
        </Accordion.Title>
        <Accordion.Content>
          <div className="flex flex-row justify-between">
            <div className="mr-10">
              <p className="mb-2 text-black dark:text-gray-400">
                {item.comment}
              </p>
            </div>
            <div className="flex flex-row space-x-6">
              <p className=" text-blue-600 cursor-pointer">
                {/* time stamp button  */}
                <Button
                  outline={true}
                  gradientDuoTone="cyanToBlue"
                  onClick={() => {
                    handlePlay(item.timestamp);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                  {item.timestamp}
                </Button>
              </p>

              {!shared && (
                <div>
                  {/* edit button  */}
                  <Button
                    outline={true}
                    gradientDuoTone="cyanToBlue"
                    onClick={() => {
                      editText(index);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Button>

                  {/* modal  */}
                  <React.Fragment>
                    <Modal show={modalState} onClose={closeModal}>
                      <Modal.Header>Edit Comment</Modal.Header>
                      <Modal.Body>
                        <div className="space-y-6">
                          <div>
                            <label
                              htmlFor="name"
                              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={editData.name}
                              onChange={handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="Name"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="comment"
                              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                            >
                              Comment
                            </label>
                            <textarea
                              id="comment"
                              name="comment"
                              value={editData.comment}
                              onChange={handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="comment"
                              required
                            />
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        {/* accept button  */}
                        <Button
                          onClick={() => {
                            handleEdit(editIndex, editData);
                            closeModal();
                          }}
                        >
                          Save changes
                        </Button>
                        {/* close button  */}
                        <Button color="gray" onClick={closeModal}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </React.Fragment>
                  {/* <button
                                    className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(true)}
                                >
                                    Open regular modal
                                </button> */}
                </div>
              )}

              {!shared && (
                <div>
                  {/* delete button  */}
                  <Button
                    outline={true}
                    gradientDuoTone="cyanToBlue"
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    );
  });
  return (
    <div className="mx-20 my-5">
      <Accordion alwaysOpen={true}>{accordions}</Accordion>
    </div>
  );
};

export default AudioAccordion;
