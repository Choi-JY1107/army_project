package outManegement.backend.repository;

import outManegement.backend.dao.Account;

import java.util.List;
import java.util.Optional;

public interface AccountRepository {
    public Long save(Account account);
    public Optional<Account> findById(Long id);
    public Optional<Account> findByName(String name);
    public List<Account> findAllMember();
    public void clearAll();
    public void deleteById(Long id);

    public Optional<Account> updateAccount(Long id);
}
