package outManegement.backend.domain.repository;

import org.springframework.stereotype.Component;
import outManegement.backend.domain.Account;

import java.util.*;

public class MemoryMemberRepository implements MemberRepository {
    private Map<Long, Account> store = new HashMap<>();

    @Override
    public void save(Account account) {
        store.put(account.getMemberId(), account);
    }

    @Override
    public Optional<Account> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public Optional<Account> findByName(String name) {
        return store.values().stream()
                .filter(member -> member.getUserName().equals(name))
                .findAny();
    }

    @Override
    public List<Account> findAllMember() {
        return new ArrayList<>(store.values());
    }

    @Override
    public void clearAll() {
        store.clear();
    }

    @Override
    public void deleteById(Long id) {
        store.remove(id);
    }
}
