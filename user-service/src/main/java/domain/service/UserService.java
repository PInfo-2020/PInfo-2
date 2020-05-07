package domain.service;

import java.util.List;

import domain.model.User;

public interface UserService {

	List<User> getAll();

	void update(User user);

	void create(User user);

	User get(Long userId);
}