import { createSelector } from 'reselect';

import { currentUserId } from './utils/constants';

const getContactMessages = state => state.messages.filter(message => message.receiverId !== undefined);

const getGroupMessages = state => state.messages.filter(message => message.groupId !== undefined);

const getContacts = state => state.contacts.filter(contact => contact.id !== currentUserId);

const getGroups = state => state.groups;

const getContactsFromCurrentUser = state =>
  getContacts(state).filter(
    contact =>
      getContactMessages(state).some(
        message => message.senderId === contact.id || message.receiverId === contact.id
      ) && contact.id !== currentUserId
  );

const getCurrentUserId = () => 1;

const getChatContact = state => state.chat;

const isAMessageBetween = (userId, contactId, message) =>
  (message.senderId === userId && message.receiverId === contactId) ||
  (message.receiverId === userId && message.senderId === contactId);

const isAMessageFromGroup = (groupId, message) => (message.groupId = groupId);

const lastMessageFromAChat = (userId, contactId, messages) =>
  messages.filter(message => isAMessageBetween(userId, contactId, message)).pop();

const lastMessageFromAGroup = (groupId, messages) =>
  messages.filter(message => message.groupId === groupId).pop();

export const chatsFromCurrentUser = createSelector(
  [getContactsFromCurrentUser, getContactMessages],
  (contacts, messages) =>
    contacts.map(contact => ({
      id: contact.id,
      name: contact.username,
      avatar: contact.avatar,
      message: lastMessageFromAChat(currentUserId, contact.id, messages).body
    }))
);

export const groupsFromCurrentUser = createSelector([getGroups, getGroupMessages], (groups, messages) =>
  groups.map(group => ({
    id: group.id,
    name: group.name,
    message: lastMessageFromAGroup(group.id, messages).body
  }))
);

export const contactsFromCurrentUser = createSelector([getContacts], contacts =>
  contacts.map(contact => ({
    id: contact.id,
    name: contact.username,
    avatar: contact.avatar
  }))
);

export const messagesBetweenTwoContacts = createSelector(
  [getContactMessages, getCurrentUserId, getChatContact],
  (messages, userId, contact) =>
    messages.filter(message => isAMessageBetween(userId, contact.senderId.id, message))
);

export const groupMessages = createSelector([getGroupMessages, getChatContact], (messages, group) =>
  messages.filter(message => isAMessageFromGroup(group.groupId.id, message))
);