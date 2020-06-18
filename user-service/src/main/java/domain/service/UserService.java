package domain.service;

import java.util.List;

import domain.model.AUser;
import domain.model.FridgeItem;

public interface UserService {

	List<AUser> getAll();

	void update(AUser user);

	void create(AUser user);

	AUser get(Long userId);

	AUser addFridgeitem( Long userId, FridgeItem fi );

	AUser removeFridgeitem( Long userId, Long fi_id );

	AUser replaceFridgeitem( Long userId, Long fi_id, FridgeItem fi_new );

	AUser clearFridge( Long userId );
}
