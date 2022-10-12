package outManegement.backend.repository;

import org.springframework.stereotype.Component;
import outManegement.backend.dao.Account;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Component
public class JpaAccountRepository implements AccountRepository {
    private final EntityManager em;

    public JpaAccountRepository(EntityManager em) {
        this.em = em;
    }

    @Override
    public Long save(Account account) {
        em.persist(account);
        return account.getId();
    }

    @Override
    public Optional<Account> findById(Long id) {
        Account account = em.find(Account.class, id);
        return Optional.ofNullable(account);
    }

    @Override
    public Optional<Account> findByName(String name) {
        List<Account> result = em.createQuery("select ac from Account ac where ac.userName= :name", Account.class)
                .setParameter("name", name)
                .getResultList();
        return result.stream().findAny();
    }

    @Override
    public List<Account> findAllMember() {
        return em.createQuery("select ac from Account ac", Account.class).getResultList();
    }

    @Override
    public void clearAll() {

    }

    @Override
    public Optional<Account> updateAccount(Long id) {
        Account account = em.find(Account.class, id);
        return Optional.ofNullable(account);
    }

    @Override
    public void deleteById(Long id) {
        em.remove(em.find(Account.class,id));
    }
}
