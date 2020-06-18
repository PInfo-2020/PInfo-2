package domain.service;

import java.util.List;

import domain.model.AUser;
import domain.model.FridgeItem;

public interface UserService {

	List<AUser> getAll();

	void update(AUser user);

	void create(AUser user);

	AUser get(Long userId);

	FridgeItem getFridgeItem(Long fi_id);

	void addFridgeitem( Long userId, Long fi_id );

	void removeFridgeitem( Long userId, Long fi_id );

	void replaceFridgeitem( Long userId, Long fi_id, Long fi_new_id );

	void clearFridge( Long userId );

	Long createFridgeItem(FridgeItem fi);
}
