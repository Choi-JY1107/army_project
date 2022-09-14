package outManegement.backend.domain.repository;

import outManegement.backend.domain.Account;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    public void save(Account account);
    public Optional<Account> findById(Long id);
    public Optional<Account> findByName(String name);
    public List<Account> findAllMember();
    public void clearAll();
    public void deleteById(Long id);
}
