import React, { useState, useEffect } from 'react';
import './profile.css';

const Profile = () => {
  const [name, setName] = useState('Jane Doe');
  const [email, setEmail] = useState('janedoe@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [profilePicture, setProfilePicture] = useState('profile-picture.jpg');
  const [totalOrders, setTotalOrders] = useState(10);
  const [password, setPassword] = useState('password123');
  const [editMode, setEditMode] = useState(false);
  const [passwordChangeMode, setPasswordChangeMode] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    // Perform save/update logic here
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordChange = () => {
    setShowPasswordModal(true);
  };

  const handlePasswordSave = () => {
    if (currentPassword === 'password123') {
      setPasswordAlert(false);
      setPasswordChangeMode(true);
    } else {
      setPasswordAlert(true);
    }
  };

  useEffect(() => {
    if (passwordChangeMode) {
      setShowPasswordModal(false);
    }
  }, [passwordChangeMode]);

  const handleCloseModal = () => {
    setShowPasswordModal(false);
    setCurrentPassword('');
    setPasswordAlert(false);
  };

  const handleConfirmPasswordSave = () => {
    // Perform password change logic here
    setPasswordChangeMode(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="profile">
      <div className="profile-picture">
        {!editMode ? (
          <img src={profilePicture} alt="Profile" />
        ) : (
          <div className="profile-picture-edit">
            <img src={profilePicture} alt="Profile" />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
          </div>
        )}
      </div>
      <div className="profile-info">
        <div className="profile-header">
          <h2>Profile</h2>
          {!editMode && (
            <button onClick={handleEdit} className="edit-button">
              Edit
            </button>
          )}
        </div>
        <div className="profile-details">
          <div className="profile-row">
            <label>Name:</label>
            {!editMode ? (
              <span>{name}</span>
            ) : (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
          </div>
          <div className="profile-row">
            <label>Email:</label>
            {!editMode ? (
              <span>{email}</span>
            ) : (
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
          </div>
          <div className="profile-row">
            <label>Phone:</label>
            {!editMode ? (
              <span>{phone}</span>
            ) : (
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            )}
          </div>
          <div className="profile-row">
            <label>Total Orders:</label>
            {!editMode ? (
              <span>{totalOrders}</span>
            ) : (
              <input
                type="text"
                value={totalOrders}
                onChange={(e) => setTotalOrders(e.target.value)}
              />
            )}
          </div>
          {passwordChangeMode ? (
            <>
              <div className="profile-row">
                <label>New Password:</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="profile-row">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button onClick={handleConfirmPasswordSave} className="save-button">
                Save Password
              </button>
            </>
          ) : (
            <div className="profile-row">
              <label>Password:</label>
              {!editMode ? (
                <span>******</span>
              ) : (
                <button onClick={handlePasswordChange} className="change-button">
                  Change Password
                </button>
              )}
            </div>
          )}
        </div>
        {editMode && (
          <button onClick={handleSave} className="save-button">
            Save
          </button>
        )}
      </div>
      {showPasswordModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Change Password</h3>
            <div className="modal-row">
              <label>Previous Password:</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            {passwordAlert && <p className="password-alert">Previous password is incorrect.</p>}
            <div className="modal-actions">
              <button onClick={handlePasswordSave} className="modal-button">
                Save
              </button>
              <button onClick={handleCloseModal} className="modal-button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
