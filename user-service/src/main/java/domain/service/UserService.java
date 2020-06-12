package domain.service;

import java.util.List;

import domain.model.AUser;

public interface UserService {

	List<AUser> getAll();

	void update(AUser user);

	void create(AUser user);

	AUser get(Long userId);
}