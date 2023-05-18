import React from 'react';
import Modal from 'react-modal';

const NameModal = ({ id, showModal, setShowModal, setSelectedSlots, setName }) => {
  //handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowModal(false);
    //add a new user to backend
    const response = await fetch(`/api/event/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        availability: [],
      }),
    });
    //get the updated event data and set the state
    const updatedEvent = await response.json();
    const updatedSelectedSlots = updatedEvent.users.reduce((slots, user) => {
      slots[user.name] = user.availability;
      return slots;
    }, {});

    setSelectedSlots(updatedSelectedSlots);
  };

  return (
    <Modal isOpen={showModal}>
      <h2>Enter your name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </Modal>
  );
};

export default NameModal;