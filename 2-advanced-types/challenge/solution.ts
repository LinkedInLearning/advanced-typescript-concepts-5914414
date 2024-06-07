type UserType = 'admin' | 'guest' | 'member';

interface GenericUser<T extends UserType> {
  id: number;
  username: string;
  permissions?: T extends 'admin' ? string[] : never;
  expirationDate?: T extends 'guest' ? Date : never;
  memberSince?: T extends 'member' ? Date : never;
}

function updateUser<T extends UserType>(user: GenericUser<T>) {
  console.log(`Updating user ${user.username}`);
  if (user.permissions && 'permissions' in user) {
    console.log('Permissions:', user.permissions.join(', '));
  }
  if (user.expirationDate && 'expirationDate' in user) {
    console.log('Expires:', user.expirationDate.toISOString());
  }
  if (user.memberSince && 'memberSince' in user) {
    console.log('Member Since:', user.memberSince.toISOString());
  }
  // Simulate updating user in the database
}

// Usage of the function with conditional types
const admin: GenericUser<'admin'> = {
  id: 1,
  username: "adminUser",
  permissions: ["manage_system", "modify_users"]
};

const guest: GenericUser<'guest'> = {
  id: 2,
  username: "guestUser",
  expirationDate: new Date()
};

const member: GenericUser<'member'> = {
  id: 3,
  username: "memberUser",
  memberSince: new Date()
};

updateUser(admin);
updateUser(guest);
updateUser(member);
